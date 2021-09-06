package mainPack.customerPack;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	List<Customer> findAll();

	Customer findById(int custId);

	Customer save(Customer c);

	void deleteById(int custId);
	
	
	/*@Modifying
	@Query("update Customer c set c.cust_Name = :cust_Name, c.cust_Address=:cust_Address, c.cust_PhoneNo=:cust_PhoneNo, c.cust_Password=:cust_Password, c.cust_Email_ID=:cust_Email_ID, c.eMCardNo=:eMCardNo, c.eMartPoints=:eMartPoints where c.custid = :custid")
	void update(@Param("cust_Name") String cust_Name,
			@Param("cust_Address") String cust_Address, @Param("cust_PhoneNo") long cust_PhoneNo,
//			, c.cust_UserID=:cust_UserID		@Param("cust_UserID") String cust_UserID,
			@Param("cust_Password") String cust_Password, @Param("cust_Email_ID") String cust_Email_ID, @Param("eMCardNo") int eMCardNo, @Param("eMartPoints") int eMartPoints, @Param("custid") int custid);*/
	
	@Modifying
	@Query("update Customer c set c.cust_Name = :cust_Name,c.cust_PhoneNo=:cust_PhoneNo, c.cust_Address=:cust_Address, c.cust_Email_ID=:cust_Email_ID where c.custid = :custId")
	void update(@Param("cust_Name") String cust_Name,@Param("cust_PhoneNo") long cust_PhoneNo,@Param("cust_Address") String cust_Address, @Param("cust_Email_ID") String cust_Email_ID, @Param("custId")int custId);

	
	@Modifying
	@Query("update Invoice i set i.custid = 0 where i.custid= :custId")
	void updateChildInvoiceById(@Param("custId")int custId);
	
	@Modifying
	@Query("delete from Cart c where c.custid = :custId")
	void deleteChildCartById(@Param("custId")int custId);
	
	
	
	@Query("select o.orderDate,o.deliveryDate,i.totalItemCost,i.qty,i.invoiceOrderID,p.prodName from Invoice i join OrderDtl o on i.invoiceOrderID=o.invoiceOrderID join Product p on i.productID=p.prodID where i.custid= :custId")
	List<?> getOrderDtl(@Param("custId")int custId);
}
