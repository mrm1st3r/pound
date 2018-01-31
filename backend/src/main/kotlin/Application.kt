package de.holisticon.reference.data

import de.holisticon.reference.rest.model.ApplicationDto
import org.mapstruct.InheritInverseConfiguration
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import org.mapstruct.Mappings
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "application")
data class Application(
    @Id
    var id: Long? = null,
    val name: String,
    val description: String? = null) {
  constructor() : this(null, "", null)
}

@Mapper(componentModel = "spring")
interface ApplicationConverter {

  @Mappings(Mapping(source = "id", target = "applicationId"))
  fun toDto(entity: Application): ApplicationDto
  fun toDtos(applications: Iterable<Application>): List<ApplicationDto>

  @InheritInverseConfiguration
  fun toEntity(dto: ApplicationDto): Application

  fun integerListToStringList(integers: List<Int>): List<String>

}


