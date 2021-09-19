package mainPack.configDetailPack;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public interface Config_details_Repository extends JpaRepository<Config_details, Integer> {
		@SuppressWarnings("unchecked")
		Config_details save(Config_details cd);
		List<Config_details> findAll();
		Config_details deleteById(int id);
		Config_details findById(int id);
		@Modifying
		@Query("update Config_details cd set cd.product_id=:product_id, cd.product_details=:product_details, cd.config_id=:config_id where cd.config_detail_id=:config_detail_id")
		void update(@Param("product_id") int product_id, @Param("product_details") String product_details, @Param("config_id") int config_id, @Param("config_detail_id") int config_detail_id);

		@Query("select c.configName, cd.product_details from Config c, Config_details cd where cd.product_id=:product_id and c.configID=cd.config_id")
		List<String> findProdDetailsById(@Param("product_id") int product_id);
}
