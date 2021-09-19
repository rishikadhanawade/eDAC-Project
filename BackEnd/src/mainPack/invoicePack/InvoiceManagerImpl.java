package mainPack.invoicePack;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceManagerImpl implements InvoiceManager{

	@Autowired
	InvoiceRepository repository;
	
	@Override
	public List<Invoice> get() {
		return repository.findAll();
	}

	@Override
	public Invoice get(int id) {
		return repository.findById(id);
	}

	@Override
	public void add(Invoice i) {
		repository.save(i);
		
	}

	@Override
	public void update(Invoice i, int invoiceID) {
	      repository.update(i.getCustid(),i.getDeliveryCharge(),i.getProductID(),i.getQty(),i.getTotalBill(),i.getTotalDiscount(),i.getTotalItemCost(),invoiceID);
			
		}

	@Override
	public void delete(int id) {
		repository.deleteChildOrderDetailById(id);
		repository.deleteById(id);
		
	}

	@Override
	public List<Invoice> GetCustInvoiceData(int id) {
		
		return repository.GetCustInvoiceData(id);
	}


}
