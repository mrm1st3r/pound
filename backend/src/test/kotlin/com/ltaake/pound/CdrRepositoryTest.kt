package com.ltaake.pound

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("itest")
class CdrRepositoryTest {

    @Autowired
    lateinit var repository: CdrRepository

    @Test
    fun `should select calls`() {
        // When:
        val calls = repository.findAllCalls()

        // Then:
        assertThat(calls).hasSize(2)


    }
}
