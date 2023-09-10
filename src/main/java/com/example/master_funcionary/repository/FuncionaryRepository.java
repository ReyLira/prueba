package com.example.master_funcionary.repository;

import com.example.master_funcionary.model.Funcionary;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionaryRepository extends ReactiveCrudRepository<Funcionary, Integer> {
}
