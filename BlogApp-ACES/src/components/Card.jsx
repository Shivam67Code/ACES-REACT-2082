import {Link} from 'react-router-dom'

const Card = ({blog}) => {
    if(!blog){
        return null
    }
    
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link to={"/single/" + blog.id}>
        <img 
          className="w-full h-48 object-cover" 
          src={blog.image || 'https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg'} 
          alt={blog.title || "Blog image"}
          onError={(e) => {
            e.target.src = 'https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg'
          }}
        />
      </Link>
      
      <div className="p-6">
        <Link to={"/single/" + blog.id}>
          <h5 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {blog.title || 'Untitled Blog'}
          </h5>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.description || 'No description available...'}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            {blog.subtitle || 'General'}
          </span>
          <span className="text-gray-500">
            {blog.createdAt || 'No date'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
