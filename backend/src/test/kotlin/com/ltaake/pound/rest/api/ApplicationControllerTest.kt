package com.ltaake.pound.rest.api

import com.ltaake.pound.data.ApplicationConverter
import com.ltaake.pound.data.ApplicationRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Test
import org.mockito.Mockito.mock

class ApplicationControllerTest {

    private var controller: ApplicationController? = null
    @Before
    fun init() {
        controller = ApplicationController(mock(ApplicationRepository::class.java), mock(ApplicationConverter::class.java))
    }


    @Test
    fun shouldCreateApplication() {
        assertThat(controller!!.getConstantValue()).isEqualTo("VALUE")
    }
}
