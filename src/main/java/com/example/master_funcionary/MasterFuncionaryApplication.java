package com.example.master_funcionary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.master_funcionary.repository", "com.example.master_funcionary.controller", "com.example.master_funcionary.service","com.example.master_funcionary.service.impl"})
public class MasterFuncionaryApplication {

    public static void main(String[] args) {
        SpringApplication.run(MasterFuncionaryApplication.class, args);
    }

}
