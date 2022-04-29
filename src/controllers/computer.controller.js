import Computer from '../models/computer'
import { runCommands, updateLogs } from '../models/monitor'

export async function index (req, res) {
  const computers = await Computer.find().lean()
  
  res.render('computer/index', {
    title: 'Computers',
    computers
  })
}

export function create (req, res) {
  res.render('computer/create', {
    title: 'Create Computer',
  })
}

export async function store (req, res) {
  const { name, ip, role } = req.body
    
  const computer = await Computer.create({
    name,
    ip,
    role
  })

  await computer.save()
  
  req.flash('success', 'Computer created successfully')
  res.redirect('/computers')
}

export async function show(req, res) {
  const { ip } = req.params

  const computer = await Computer.findOne({ ip }).lean()

  const monitoring = await runCommands({ ip })

  // updateLogs({ ip })

  res.render('computer/show', {
    title: 'Computer',
    computer,
    monitoring
  })
}

export async function edit(req, res) {
  const { ip } = req.params

  const computer = await Computer.findOne({ ip })

  res.render('computer/edit', {
    title: 'Edit Computer',
    computer
  })
}

export async function update(req, res) {
  const { ip } = req.params
  const { name, role } = req.body
    
  const computer = await Computer.findOneAndUpdate({ ip }, {
    name,
    role
  })
    
  await computer.save()
    
  req.flash('success', 'Computer updated successfully')
  res.redirect('/computers')
}

export async function destroy(req, res) {
  const { ip } = req.params
        
  await Computer.findOneAndDelete({ ip })
        
  req.flash('success', 'Computer deleted successfully')
  res.redirect('/computers')
}