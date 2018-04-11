package de.holisticon.reference.rest.api;

import de.holisticon.reference.data.Application;
import de.holisticon.reference.data.ApplicationConverter;
import de.holisticon.reference.data.ApplicationRepository;
import de.holisticon.reference.rest.model.ApplicationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class ApplicationController implements ApplicationsApi {

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
    public ResponseEntity<List<ApplicationDto>> getApplications(final String stage, @Valid final Optional<List<String>> id, @Valid final Optional<Integer> offset, @Valid final Optional<Integer> limit) {
        final Iterable<Application> all = repository.findAll();
        return ResponseEntity.ok(applicationConverter.toDtos(all));
    }

    public String getConstantValue() {
        return "VALUE";
    }
}
