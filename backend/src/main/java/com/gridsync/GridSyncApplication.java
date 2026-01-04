package com.gridsync;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GridSyncApplication {

	public static void main(String[] args) {
		SpringApplication.run(GridSyncApplication.class, args);
	}

}
