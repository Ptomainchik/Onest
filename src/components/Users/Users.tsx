import React, { FC, useEffect } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import UsersSearchForm from "./UsersFormSearch";
import { FilterType, requestUsers } from "../../redux/usersReduser";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from "../../redux/usersSelectors";
import { useHistory } from "react-router-dom";


type QueryParamsType = { term?: string, page?: string, friend?: string}

const parseQueryString  = (search: string) => new URLSearchParams(search).getAll('')

type PropsType = {
  
}

export const Users: FC<PropsType> = (props) => {
   const totalUsersCount = useSelector(getTotalUsersCount)
   const currentPage = useSelector(getCurrentPage)
   const pageSize = useSelector(getPageSize)
   const filter = useSelector(getUsersFilter)
   const users = useSelector(getUsers)
   const followingInProgress = useSelector(getFollowingInProgress)
   
   const dispatch = useDispatch()

   const history = useHistory()

   useEffect(() => {
      const parsed = parseQueryString(history.location.search.substr(1) ) as QueryParamsType
    
      let actualPage = currentPage
      let actualFilter = filter
      
      if (!!parsed.page) actualPage = Number(parsed.page)
      
      if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}    
      switch(parsed.friend) {
         case "null":
            actualFilter = {...actualFilter,friend: null}
            break
         case "true":
            actualFilter = {...actualFilter, friend: true}
            break
         case "false":
            actualFilter = {...actualFilter, friend: false}
            break         
      }
      
  
   
      dispatch(requestUsers(actualPage, pageSize, actualFilter))
   }, [])
   
   useEffect(() => {
      const query: QueryParamsType = {}
      if (!!filter.term) query.term = filter.term
      if (filter.friend !== null) query.friend = String(filter.friend)
      if (currentPage !== 1) query.page = String(currentPage) 
      history.push({
         pathname: "/users",
         search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
      })
   }, [filter, currentPage])

   const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter))
   }

   const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter))
   }
  
   const follow = (userId: number) => {
    dispatch(follow(userId))
   }

   const unfollow = (userId: number) => {
    dispatch(unfollow(userId))
   }


   return <div>
      <UsersSearchForm onFilterChanged = {onFilterChanged} />
        <Paginator currentPage = {currentPage} onPageChanged = {onPageChanged} totalItemsCount = {totalUsersCount} pageSize = {pageSize} />
     <div>
       {users.map(u => <User user = {u} followingInProgress={followingInProgress} key = {u.id} unfollow={unfollow} follow={follow}/>)}
        </div>
        </div> 
}
