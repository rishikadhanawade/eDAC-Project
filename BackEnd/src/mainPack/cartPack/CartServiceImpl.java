package mainPack.cartPack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImpl implements CartServices {
	
	@Autowired
	CartRepository repository;

	@Override
	public List<Cart> getAll() {
		return repository.findAll();
	}

	@Override
	public Cart get(int cid) {
		return repository.findById(cid);
	}

	@Override
	public void add(Cart c) {
		 repository.save(c);
	}

	@Override
	public void delete(int cid) {
		repository.deleteById(cid);
		
	}

	@Override
	public void update(Cart c, int cid) {
      repository.update(c.getCustid(),c.getDeliveryCharge(),c.getQty(),c.getTotalBill(),c.getTotalDiscount(),c.getTotalItemCost(),cid);
		
	}

}
