package mainPack.invoicePack;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
@Transactional
public interface InvoiceRepository extends JpaRepository<Invoice,Integer> {

	Invoice save(Invoice i);
	List<Invoice> findAll();
	void deleteById(int id);
	Invoice findById(int id);
	
	@Query("select i from Invoice i where i.custid = :custid")
	List<Invoice> GetCustInvoiceData(@Param("custid") int custid);
	
	@Modifying
	@Query("update Invoice i set i.custid = :custid, i.deliveryCharge= :deliveryCharge, i.productID=:productID, i.qty=:qty, i.totalBill=:totalBill, i.totalDiscount=:totalDiscount, i.totalItemCost=:totalItemCost where i.invoiceOrderID = :invoiceID")
	void update(@Param("custid") int custid,@Param("deliveryCharge") int deliveryCharge,@Param("productID") int productID,@Param("qty") int qty,@Param("totalBill") int totalBill ,@Param("totalDiscount") int totalDiscount,@Param("totalItemCost") int totalItemCostD,@Param("invoiceID") int invoiceID);
	
	@Modifying
	@Query("delete from OrderDtl o where o.invoiceOrderID= :oid")
	void deleteChildOrderDetailById(@Param("oid")int oid);


}
