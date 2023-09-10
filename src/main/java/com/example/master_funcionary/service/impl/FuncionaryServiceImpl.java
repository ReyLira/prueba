package com.example.master_funcionary.service.impl;

import com.example.master_funcionary.model.Funcionary;
import com.example.master_funcionary.repository.FuncionaryRepository;
import com.example.master_funcionary.service.FuncionaryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Slf4j
@Service
@RequiredArgsConstructor
public class FuncionaryServiceImpl implements FuncionaryService {

    private final  FuncionaryRepository funcionaryRepository;

    @Override
    public Mono<Funcionary> findById(Integer id) {
        return this.funcionaryRepository.findById(id);
    }

    @Override
    public Flux<Funcionary> findAll() {
        return this.funcionaryRepository.findAll();
    }

    @Override
    public Mono<Funcionary> save(Funcionary funcionary) {
        return this.funcionaryRepository.save(funcionary);
    }

    @Override
    public Mono<Funcionary> update(Integer id, Funcionary funcionary) {
        return this.funcionaryRepository.findById(id)
                .flatMap(existingFuncionary ->{
                    existingFuncionary.setName(funcionary.getName());
                    existingFuncionary.setSurname(funcionary.getSurname());
                    existingFuncionary.setDni(funcionary.getDni());
                    existingFuncionary.setPhonenumber(funcionary.getPhonenumber());
                    existingFuncionary.setRank(funcionary.getRank());
                    existingFuncionary.setDepartment(funcionary.getDepartment());
                    existingFuncionary.setAddress(funcionary.getAddress());
                    existingFuncionary.setEmail(funcionary.getEmail());
                    existingFuncionary.setId_adolescente(funcionary.getId_adolescente());
                    return this.funcionaryRepository.save(existingFuncionary);
                });
    }

    @Override
    public Mono<Void> delete(Integer id) {
        return this.funcionaryRepository.findById(id)
                .flatMap(funcionary -> {
                    funcionary.setEstado("I");
                    return this.funcionaryRepository.save(funcionary);
                })
                .then();
    }
}
