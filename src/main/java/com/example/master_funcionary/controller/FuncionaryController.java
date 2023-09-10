package com.example.master_funcionary.controller;

import com.example.master_funcionary.model.Funcionary;
import com.example.master_funcionary.service.FuncionaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/funcionary")
@RequiredArgsConstructor
public class FuncionaryController {

    private final FuncionaryService funcionaryService;

    @GetMapping
    public Flux<Funcionary> listAll(){
        return funcionaryService.findAll();
    }

    @GetMapping("/{id}")
    public Mono<Funcionary> listById(@PathVariable Integer id){
        return funcionaryService.findById(id);
    }

    @PostMapping
    public Mono<Funcionary> createFuncionary(@RequestBody Funcionary funcionary){
        return funcionaryService.save(funcionary);
    }

    @PutMapping("/{id}")
    public Mono<Funcionary> updateFuncionary(@RequestBody Funcionary funcionary, @PathVariable Integer id){
        return funcionaryService.update(id , funcionary);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> deleteFuncionary (@PathVariable Integer id){
        return funcionaryService.delete(id);
    }
}
