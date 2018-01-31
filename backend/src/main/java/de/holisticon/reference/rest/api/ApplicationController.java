package de.holisticon.reference.rest.api;

import de.holisticon.reference.data.Application;
import de.holisticon.reference.data.ApplicationConverter;
import de.holisticon.reference.data.ApplicationRepository;
import de.holisticon.reference.rest.model.ApplicationDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
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
        return null;
    }

    @Override
    public ResponseEntity<List<ApplicationDto>> getApplications(final String stage, @Valid final Optional<List<String>> id, @Valid final Optional<Integer> offset, @Valid final Optional<Integer> limit) {

        // TODO paging support, parameter support

        final Iterable<Application> all = repository.findAll();
        return ResponseEntity.ok(applicationConverter.toDtos(all));
    }
}
