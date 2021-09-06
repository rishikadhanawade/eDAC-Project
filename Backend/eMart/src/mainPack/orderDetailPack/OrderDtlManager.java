package mainPack.orderDetailPack;

import java.util.List;

public interface OrderDtlManager {

	List<OrderDtl> get();
	OrderDtl get(int id);
	void add(OrderDtl od);
	void update(OrderDtl od,int id);
	void delete(int id);
}
