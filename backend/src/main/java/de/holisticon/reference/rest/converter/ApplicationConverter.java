package de.holisticon.reference.rest.converter;

import de.holisticon.reference.data.Application;
import de.holisticon.reference.rest.model.ApplicationDto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ApplicationConverter {

    @Mappings(
            @Mapping(source = "id", target = "applicationId")
    )
    ApplicationDto toDto(Application entity);

    List<ApplicationDto> toDtos(Iterable<Application> applications);

    List<String> integerListToStringList(List<Integer> integers);

}


