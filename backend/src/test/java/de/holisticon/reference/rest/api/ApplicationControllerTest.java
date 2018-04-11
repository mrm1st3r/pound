package de.holisticon.reference.rest.api;

import org.junit.Before;
import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

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
