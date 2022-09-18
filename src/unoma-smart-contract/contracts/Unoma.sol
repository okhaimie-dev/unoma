// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Unoma {
    event ProfileUpdated(
        address profileAddress,
        string profileThumbnailUrl,
        string profileName,
        string profileBio
    );
    event PodcastNameUpdated(
        address profileAddress,
        string podcastName
    );
    event Posted(
        address profileAddress,
        string podcastName,
        string postThumbnailUrl,
        string postAudioUrl,
        string postTitle
    );
    struct UpdateProfileManager {
        address profileAddress;
        string profileThumbnailUrl;
        string profileName;
        string profileBio;
    }
    struct UpdatePodcastNameManager {
        address profileAddress;
        string podcastName;
    }
    struct PostManager {
        address profileAddress;
        string podcastName;
        string postThumbnailUrl;
        string postAudioUrl;
        string postAudioName;
    }
    mapping(bytes32 => UpdateProfileManager) public idToProfileManagerUpdater;
    mapping(bytes32 => UpdatePodcastNameManager) public idToUpdatePodcastNameManager;
    mapping(bytes32 => PostManager) public idToPostManager;
    function updateProfile(string calldata profileThumbnailUrl, string calldata profileName, string calldata profileBio) external {
        emit ProfileUpdated(msg.sender, profileThumbnailUrl, profileName, profileBio);
    }
    function updatePodcastName(string calldata podcastName) external {
        emit PodcastNameUpdated(msg.sender, podcastName);
    }
    function post(string calldata podcastName, string calldata thumbnailUrl, string calldata audioUrl, string calldata audioName) external {
        emit Posted(msg.sender, podcastName, thumbnailUrl, audioUrl, audioName);
    }
}