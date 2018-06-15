package com.ltaake.pound.rest.api;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;

import org.junit.Before;
import org.junit.Test;

import com.ltaake.pound.data.ApplicationConverter;
import com.ltaake.pound.data.ApplicationRepository;

public class ApplicationControllerTest {

    private ApplicationController controller;
    @Before
    public void init () {
        controller = new ApplicationController(mock(ApplicationRepository.class), mock(ApplicationConverter.class));
    }


    @Test
    public void shouldCreateApplication(){
        assertThat(controller.getConstantValue()).isEqualTo("VALUE");
    }
}
