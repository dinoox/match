package com;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@MapperScan("com.dao")
@SpringBootApplication
public class MatchApplication {
    public static void main(String[] args) {
        SpringApplication.run(MatchApplication.class, args);
    }
}
