package idat.edu.pe.jpa.servicios;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import idat.edu.pe.jpa.modelo.Empleados;
import idat.edu.pe.jpa.repositorios.EmpleadosRepositorio;



@Service
@Transactional
public class EmpleadosServicio {
	
	@Autowired
	private EmpleadosRepositorio repositorio;
	
	public EmpleadosServicio(){
		
	}
	
	public List<Empleados> buscarTodo(){
		return(List<Empleados>) repositorio.findAll();
	}
	
	/*public Empleados crear(Cursos cursos) {
		return repositorio.save(cursos);
	}
	
	public Cursos actualizar(Cursos cursosActualizar) {
		Cursos cursoActual = repositorio.findById(cursosActualizar.getID_CURSOS()).get();
		cursoActual.setID_CURSOS(cursosActualizar.getID_CURSOS());
		cursoActual.setNOMBRE(cursosActualizar.getNOMBRE());
		cursoActual.setNRO_HORAS(cursosActualizar.getNRO_HORAS());
		cursoActual.setFECHA_INICIO(cursosActualizar.getFECHA_INICIO());
		cursoActual.setFECHA_FIN(cursosActualizar.getFECHA_FIN());
		cursoActual.setPRECIO_CURSO(cursosActualizar.getPRECIO_CURSO());
		cursoActual.setESTADO(cursosActualizar.getESTADO());
		cursoActual.setID_EMPLEADOS(cursosActualizar.getID_EMPLEADOS());
		
		Cursos cursoActualizado = repositorio.save(cursoActual);
		return cursoActualizado;
	}
	
	public Cursos buscarPorID(Integer id) {
		return repositorio.findById(id).get();
	}
	
	public void borrarPorID(Integer id) {
		repositorio.deleteById(id);
	}*/

}
