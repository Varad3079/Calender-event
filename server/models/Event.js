import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String },
  description: { type: String },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
