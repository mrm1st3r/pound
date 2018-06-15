package com.ltaake.pound.data

import org.springframework.data.repository.PagingAndSortingRepository

interface ApplicationRepository: PagingAndSortingRepository<Application, Long>
