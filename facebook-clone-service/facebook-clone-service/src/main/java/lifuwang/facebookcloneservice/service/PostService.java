package lifuwang.facebookcloneservice.service;

import lifuwang.facebookcloneservice.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface PostService {
    @Autowired
    Post addPost(Post post) throws Exception;

    List<Post> getPosts();
}
