package mainPack.configPack;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface ConfigRepository extends JpaRepository<Config,Integer> {

	Config save(Config c);
	List<Config> findAll();
	void deleteById(int cid);
	
	@Modifying
	@Query("update Config c set c.configName=:configName where c.configID=:configID")
	void update(@Param("configName") String configName,@Param("configID") int configID);
	Config findById(int cid);
	
	
	@Modifying
	@Query("delete from Config_details c where c.config_id = :config_id")
	void deleteChildConfigDetailById(@Param("config_id")int config_id);
	
}

