package mainPack.invoicePack;


import java.util.List;

public interface InvoiceManager {

	List<Invoice> get();
	Invoice get(int id);
	void add(Invoice i);
	void update(Invoice i,int id);
	void delete(int id);
	List<Invoice> GetCustInvoiceData(int id);
}
