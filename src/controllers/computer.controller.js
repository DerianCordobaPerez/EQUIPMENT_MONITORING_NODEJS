import Computer from '../models/computer'
import { ComputerFactory } from '../models/Computer/ComputerFactory'

/**
 * It finds all the computers in the database, and then renders the index view, passing in the
 * computers
 * @param req - The request object. This is an object that contains information about the HTTP request
 * that raised the event.
 * @param res - The response object.
 */
export async function index (req, res) {
  const computers = await Computer
    .find()
    .lean()
  
  res.render('computer/index', {
    title: 'Computers',
    computers
  })
}

/**
 * Render the create computer view.
 * @param req - The request object. This is the object that contains all the information about the
 * request that was made to the server.
 * @param res - The response object.
 */
export function create (req, res) {
  res.render('computer/create', {
    title: 'Create Computer',
  })
}

/**
 * It creates a new computer and saves it to the database
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
export async function store (req, res) {
  const { name, ip, role } = req.body
    
  const computer = await Computer
    .create({
      name,
      ip,
      role
    })

  await computer
    .save()
  
  req.flash('success', 'Computer created successfully')
  res.redirect('/computers')
}

/**
 * It finds a computer by its IP address, creates a new computer factory, and then renders the show
 * view
 * @param req - The request object.
 * @param res - The response object.
 */
export async function show(req, res) {
  const { ip } = req.params

  const computer = await Computer
    .findOne({ ip })
    .lean()

  const computerFactory = new ComputerFactory(computer.role)

  // computerFactory.computer.logs({ ip })

  res.render('computer/show', {
    title: 'Computer',
    computer,
    monitoring: await computerFactory.init({ ip })
  })
}

/**
 * It renders the edit computer page
 * @param req - The request object.
 * @param res - The response object.
 */
export async function edit(req, res) {
  const { ip } = req.params

  const computer = await Computer
    .findOne({ ip })

  res.render('computer/edit', {
    title: 'Edit Computer',
    computer
  })
}

/**
 * It finds a computer by its IP address, updates its name and role, and then saves the computer
 * @param req - The request object.
 * @param res - The response object.
 */
export async function update(req, res) {
  const { ip } = req.params
  const { name, role } = req.body
    
  const computer = await Computer
    .findOneAndUpdate({ ip }, {
      name,
      role
    })
    
  await computer
    .save()
    
  req.flash('success', 'Computer updated successfully')
  res.redirect('/computers')
}

/**
 * It finds a computer by its IP address and deletes it
 * @param req - The request object.
 * @param res - The response object.
 */
export async function destroy(req, res) {
  const { ip } = req.params
        
  await Computer
    .findOneAndDelete({ ip })
        
  req.flash('success', 'Computer deleted successfully')
  res.redirect('/computers')
}