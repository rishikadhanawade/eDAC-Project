package mainPack.configDetailPack;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@RequestMapping("/ConfigDetails")
@CrossOrigin("http://localhost:3000")
public class Config_details_Controller {
	
	@Autowired
	Config_details_Manager cdm;
	
	@GetMapping(value="AllConfigDetails", headers = "Accept=application/json")
	public String getAll(){
		return new Gson().toJson(cdm.getAll_Config_details());
	}
	
	@GetMapping(value="GetConfigDetail/{id}", headers = "Accept=application/json")
	public String getById(@PathVariable int id){
		return new Gson().toJson(cdm.get_config_details_ById(id));
	}
	
	@DeleteMapping(value="DeleteConfigDetail/{id}", headers = "Accept=application/json")
	public void delete(@PathVariable int id){
		cdm.delete_config_details(id);
		
	}
	
	@PostMapping(value="AddConfigDetail", headers = "Accept=application/json")
	public void add(@RequestBody Config_details cd){
		cdm.add_Config_detail(cd);
	}
	
	@PutMapping(value="UpdateConfigDetail/{id}", headers = "Accept=application/json")
	public void update(@RequestBody Config_details cd, @PathVariable int id) {
		cdm.update_config_details(cd, id);
	}
	

	@GetMapping(value="AllProdDetailsByProdId/{id}", headers = "Accept=application/json")
	public String getProdDetails(@PathVariable int id){
		return new Gson().toJson(cdm.getProdDetailsById(id));
	}
	
}
