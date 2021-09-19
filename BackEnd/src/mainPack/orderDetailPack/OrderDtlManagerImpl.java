package mainPack.orderDetailPack;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderDtlManagerImpl implements OrderDtlManager{

	@Autowired
	OrderDtlRepository repository;
	
	@Override
	public List<OrderDtl> get() {
		return repository.findAll();
	}

	@Override
	public OrderDtl get(int id) {
		return repository.findById(id);
	}

	@Override
	public void add(OrderDtl od) {
		repository.save(od);
		
	}

	@Override
	public void update(OrderDtl od, int id) {
		repository.update(od.getInvoiceOrderID(),od.getDeliveryDate(),od.getOrderDate(),od.getOtherShippingAddr(),id);
		
	}

	@Override
	public void delete(int id) {
		repository.deleteById(id);
		
	}

}
