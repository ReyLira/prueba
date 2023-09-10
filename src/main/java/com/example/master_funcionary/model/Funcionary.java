package com.example.master_funcionary.model;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "funcionary")
@NoArgsConstructor
public class Funcionary {
    @Id
    private Integer id;
    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private  String dni;
    @Column
    private String phonenumber;
    @Column
    private String rank;
    @Column
    private String department;
    @Column
    private String address;
    @Column
    private String email;
    @Column
    private String estado;
    @Column
    private Integer id_adolescente;

}
