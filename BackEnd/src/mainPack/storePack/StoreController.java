package mainPack.storePack;

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
@RequestMapping("/Store")
@CrossOrigin("http://localhost:3000")
public class StoreController {
	@Autowired
	StoreManager manager;

	@GetMapping(value = "AllStores", headers = "Accept=application/json")
	public String showStores() {
		return new Gson().toJson(manager.getStores());
	}

	@GetMapping(value = "GetStore/{sid}", headers = "Accept=application/json")
	public Store getStore(@PathVariable int sid) {
		Store s = manager.getStore(sid);
		return s;
	}

	@DeleteMapping(value = "DeleteStore/{sid}", headers = "Accept=application/json")
	public void removeStore(@PathVariable int sid) {
		manager.delete(sid);
	}

	@PutMapping(value = "UpdateStore/{sid}", headers = "Accept=application/json")
	public void updateStore(@RequestBody Store store, @PathVariable int sid) {
		manager.update(store, sid);
	}

	@PostMapping(value = "AddStore", headers = "Accept=application/json")
	public void addStore(@RequestBody Store store) {
		manager.addStore(store);
	}
}
