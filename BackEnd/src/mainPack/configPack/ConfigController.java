package mainPack.configPack;

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
@RequestMapping("/Config")
@CrossOrigin("http://localhost:3000")
public class ConfigController {

	@Autowired
	ConfigService cs;
	
	@GetMapping(value="AllConfig" ,headers = "Accept=application/json")  
	 public String showConfig()
	 {
		  return new Gson().toJson(cs.getConfig());
	 }
	@GetMapping(value = "GetConfig/{cid}", headers = "Accept=application/json")  
	 public Config getConfig(@PathVariable int cid)
	 {
		Config c=cs.getConfig(cid);
		return c;
	 }
	@DeleteMapping(value = "DeleteConfig/{cid}", headers = "Accept=application/json")  
	 public void removeConfig(@PathVariable int cid)
	 {
		cs.delete(cid);
	 }
	@PutMapping(value = "UpdateConfig/{cid}",headers = "Accept=application/json")  
	 public void updateConfig(@RequestBody Config config,@PathVariable int cid)
	 {
		cs.update(config,cid);
	 }
	@PostMapping(value = "AddConfig", headers = "Accept=application/json")  
	 public void addConfig(@RequestBody Config config)
	 {
		cs.addConfig(config);
	 }
	
}
