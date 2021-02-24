using System;
using System.Collections.Generic;
using BitcubeServer.Models;
using MongoDB.Driver;

namespace BitcubeServer.Services
{
    public class PostService
    {
        
        private readonly IMongoCollection<Post> _posts;

        public PostService(IPostsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _posts = database.GetCollection<Post>(settings.PostCollectionName);

        }

        public List<Post> Get() => _posts.Find(post => true).ToList();

        public Post CreatePost(Post post)
        {
            try
            {
                _posts.InsertOneAsync(post);

                return post;
            }
            catch (Exception e)
            {
                
                throw e;
            }
        }
    }
}