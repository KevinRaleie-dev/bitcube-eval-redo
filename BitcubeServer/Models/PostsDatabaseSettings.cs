namespace BitcubeServer.Models
{
    public class PostsDatabaseSettings : IPostsDatabaseSettings
    {
        public string PostCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IPostsDatabaseSettings
    {
        string PostCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}