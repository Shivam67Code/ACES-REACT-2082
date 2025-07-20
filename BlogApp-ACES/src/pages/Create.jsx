import react from 'react'

const Create = () =>{
  return (
    <div className ="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className='text-3xl font-bold text-blue-800 text-center mb-8'>Create New Blog</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form>
            {/* making all form contents here with divs */}
            <div>
              <label className="block text-gray-600 font-medium mb-2"> Blog Title</label>
              <input type="text" id='title' name='title' placeholder='Enter Blog TItle' className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50'/>
            </div>

            {/* dropdown to select subtitle */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Sub Title</label>
              <select name="sub-title" id="sub-title" className='w-full p-3 border border-gray-300 rounded-lg bg-gray-50'>
                <option value="">Selecct a SUb TItle</option>
                <option>TEchnology</option>
                <option>LifeStyle</option>
                <option >Travel</option>
                <option>Food</option>
                <option>Sportss</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Blog Content</label>
                <textarea name="decription" id="description" rows="8" placeholder='Write Your Blog Content(Desciption Here....'
                className='w-full h-48 border border-gray-300 roudned-lg bg-gray-50'/>
              </div>
              </div>
              
              <div>
                <label className='block text-gray-600 font-medium mb-2'>Blog Image</label>
                <label htmlFor="image-upload" className='w-full h-49 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer flex flex-col item-center justify-center bg-gray-50 hover:bg-gray-100'>
                  <div className="text-center">
                    <div className="mb-2">
                      <button type="button" className='bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4'>Choose IMage</button>
                    </div>
                  </div>
                  <p className='text-gray-600 text-center'>or Drage Photo here</p>
                  <p className='text-gray-600 text-sm mt-1 text-center'>PNG,JPG,JPEG,SVG</p>  
                  </label> 
                  <input id="image-uplaod" name='image' type='file' accept='image/*' className='hidden'/>
              </div>
                <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg"
              >
                Create Blog Post
              </button>
            </div>


          </form> 
          {/* form ends here */}
        </div>
      </div>
    </div>
  )
}

export default Create