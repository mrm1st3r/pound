package com.ltaake.pound.rest.api;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ltaake.pound.data.Application;
import com.ltaake.pound.data.ApplicationConverter;
import com.ltaake.pound.data.ApplicationRepository;
import com.ltaake.pound.rest.model.ApplicationDto;

@RestController
public class ApplicationController implements ApplicationsApi {

    private static final String CONSTANT = "VALUE";

    @Autowired
    private ApplicationRepository repository;

    @Autowired
    private ApplicationConverter applicationConverter;


    @Override
    public ResponseEntity<String> createApplication(final String stage, @Valid final ApplicationDto application) {
        final Application entity = applicationConverter.toEntity(application);
        final Application result = repository.save(entity);
        final URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(result.getId()).toUri();
        return ResponseEntity.created(location).build();
    }

    @Override
    public ResponseEntity<List<ApplicationDto>> getApplications(
            @PathVariable("stage") final String stage,
            @Valid final Optional<List<String>> id,
            @Valid final Optional<Integer> offset,
            @Valid final Optional<Integer> limit) {
        final Iterable<Application> all = repository.findAll();
        return ResponseEntity.ok(applicationConverter.toDtos(all));
    }

    public String getConstantValue() {
        return CONSTANT;
    }
}
