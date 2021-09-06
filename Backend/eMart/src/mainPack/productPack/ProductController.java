package mainPack.productPack;

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
@RequestMapping("/Product")
@CrossOrigin("http://localhost:3000")
public class ProductController {
	
		@Autowired
		ProductManager manager;
		@GetMapping(value = "AllProducts",headers = "Accept=application/json")  
		 public String showProducts()
		 {
			  return new Gson().toJson(manager.getProducts());
		 }
		
		@GetMapping(value = "SpecificBrandProd/{cid}",headers = "Accept=application/json")  
		 public String SpecificBrandProd(@PathVariable int cid)
		 {
			  return new Gson().toJson(manager.SpecificBrandProd(cid));
		 }
		
		@GetMapping(value = "GetProduct/{pid}", headers = "Accept=application/json")  
		 public Product getProduct(@PathVariable int pid)
		 {
			Product p=manager.getProduct(pid);
			return p;
		 }
		@DeleteMapping(value = "DeleteProduct/{pid}", headers = "Accept=application/json")  
		 public void removeProduct(@PathVariable int pid)
		 {
			manager.delete(pid);
		 }
		@PutMapping(value = "UpdateProduct/{pid}",headers = "Accept=application/json")  
		 public void updateProduct(@RequestBody Product Product,@PathVariable int pid)
		 {
			manager.update(Product,pid);
		 }
		@PostMapping(value = "AddProduct", headers = "Accept=application/json")  
		 public void addProd(@RequestBody Product product)
		 {
			manager.addProduct(product);
		 }
@GetMapping(value = "prodInvoice",headers = "Accept=application/json")  
		 public String prodInvoice()
		 {
			  return new Gson().toJson(manager.prodInvoice());
		 }
		@GetMapping(value = "totalpts",headers = "Accept=application/json")
		public int totalpts() {
			 return manager.totalpts();
		}
	}

