import {
  Unoma,
  PodcastNameUpdated,
  Posted,
  ProfileUpdated
} from "../generated/Unoma/Unoma"
import { 
  Profiles,
  PodcastName,
  Post
} from "../generated/schema"

export function handlePodcastNameUpdated(event: PodcastNameUpdated): void {

  let entity = PodcastName.load(event.params.profileAddress.toHex())

  if (!entity) {
    entity = new PodcastName(event.params.profileAddress.toHex())
    entity.profileAddress = event.params.profileAddress.toString()
    entity.podcastName = event.params.podcastName
    entity.save()
  }
  
}

export function handlePosted(event: Posted): void {
  let entity = Post.load(event.params.profileAddress.toHex())
  if (!entity) {
    entity = new Post(event.params.profileAddress.toHex())
    entity.profileAddress = event.params.profileAddress.toString()
    entity.podcastName = event.params.podcastName
    entity.postThumbnailUrl = event.params.postThumbnailUrl
    entity.postAudioUrl = event.params.postAudioUrl
    entity.postTitle = event.params.postTitle
    entity.save()
  }
}

export function handleProfileUpdated(event: ProfileUpdated): void {
  let entity = Profiles.load(event.params.profileAddress.toHex())
  if (!entity) {
    entity = new Profiles(event.params.profileAddress.toHex())
    entity.profileAddress = event.params.profileAddress.toString()
    entity.profileThumbnailUrl = event.params.profileThumbnailUrl
    entity.profileName = event.params.profileName
    entity.profileBio = event.params.profileBio
    entity.save()
  }
}
