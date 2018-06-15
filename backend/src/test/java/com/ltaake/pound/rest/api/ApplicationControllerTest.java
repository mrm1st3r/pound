package com.ltaake.pound.rest.api;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Before;
import org.junit.Test;

public class ApplicationControllerTest {

    private ApplicationController controller;
    @Before
    public void init () {
        controller = new ApplicationController();
    }


    @Test
    public void shouldCreateApplication(){
        assertThat(controller.getConstantValue()).isEqualTo("VALUE");
    }
}
