package mainPack.offersPack;

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
@RequestMapping("/Offer")
@CrossOrigin("http://localhost:3000")
public class OfferController {
	@Autowired
	OfferManager manager;

	@GetMapping(value = "AllOffers", headers = "Accept=application/json")
	public String showOffers() {
		return new Gson().toJson(manager.getOffers());
	}

	@GetMapping(value = "GetOffer/{oid}", headers = "Accept=application/json")
	public Offer getOffer(@PathVariable int oid) {
		Offer o = manager.getOffer(oid);
		return o;
	}

	@DeleteMapping(value = "DeleteOffer/{oid}", headers = "Accept=application/json")
	public void removeOffer(@PathVariable int oid) {
		manager.delete(oid);
	}

	@PutMapping(value = "UpdateOffer/{oid}", headers = "Accept=application/json")
	public void updateOffer(@RequestBody Offer offer, @PathVariable int oid) {
		manager.update(offer, oid);
	}

	@PostMapping(value = "AddOffer", headers = "Accept=application/json")
	public void addOffer(@RequestBody Offer offer) {
		manager.addOffer(offer);
	}
}
