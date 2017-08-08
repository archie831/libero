package my.groupid.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by JPMC-PC15 on 29/06/2017.
 */
@Repository
public interface LiberoRepository extends JpaRepository<Libero, Long> {

}
