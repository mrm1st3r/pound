package de.holisticon.reference.data

import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "application")
data class Application(
    @Id
    val id: Long? = null,
    val name: String,
    val description: String? = null) {
  constructor() : this(null, "", null)
}

