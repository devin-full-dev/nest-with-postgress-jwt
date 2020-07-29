import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
import FindOneParams from '../utils/findOneParams';
import RequestWithUser from '../authentication/requestWithUser.interface';
export default class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllPosts(): Promise<import("./post.entity").default[]>;
    getPostById({ id }: FindOneParams): Promise<import("./post.entity").default>;
    createPost(post: CreatePostDto, req: RequestWithUser): Promise<import("./post.entity").default>;
    updatePost({ id }: FindOneParams, post: UpdatePostDto): Promise<import("./post.entity").default>;
    deletePost({ id }: FindOneParams): Promise<void>;
}
