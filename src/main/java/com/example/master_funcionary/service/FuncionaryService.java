package com.example.master_funcionary.service;

import com.example.master_funcionary.model.Funcionary;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public interface FuncionaryService {
    Mono<Funcionary> findById(Integer id);

    Flux<Funcionary> findAll();

    Mono<Funcionary> save(Funcionary funcionary);

    Mono<Funcionary> update(Integer id, Funcionary funcionary);

    Mono<Void> delete(Integer id);
}
