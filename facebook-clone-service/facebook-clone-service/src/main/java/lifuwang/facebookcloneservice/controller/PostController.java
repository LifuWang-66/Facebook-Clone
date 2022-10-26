package lifuwang.facebookcloneservice.controller;

import lifuwang.facebookcloneservice.model.Post;
import lifuwang.facebookcloneservice.service.PostService;
import lifuwang.facebookcloneservice.service.PostServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(value="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/post")
@RequiredArgsConstructor
@Controller
public class PostController {
    @Autowired
    private PostService postService;

    public PostController(PostServiceImpl postService) {
        this.postService = postService;
    }

    @PostMapping
    public Post addPost(@RequestParam Map<String, String> requestParams) throws Exception {
        String strPost = requestParams.get("post");
        String email = requestParams.get("email");
        String name = requestParams.get("name");
        String file = requestParams.get("file");
        String profilePic = requestParams.get("profilePic");
        Post post = Post.builder()
                .file(file)
                .name(name)
                .email(email)
                .post(strPost)
                .profilePic(profilePic)
                .timeStamp(new Date().toString())
                .build();
        post = postService.addPost(post);
        return post;
    }

    @GetMapping
    public List<Post> getPosts() {
        return postService.getPosts();
    }
}
