using System.Collections.Generic;
using BitcubeServer.Services;
using Microsoft.AspNetCore.Mvc;

namespace BitcubeServer.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly PostService _postService;

        public PostsController(PostService postService )
        {
            _postService = postService;
        }

        [HttpGet(Name = "GetPosts")]
        public ActionResult<List<Post>> GetPosts() => _postService.Get();

        [HttpPost("create")]
        public ActionResult<Post> Create(Post post)
        {
            _postService.CreatePost(post);
            return CreatedAtRoute("GetPosts", new {
                id = post.Id.ToString()
            }, post);
        }
    }
}