import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

import {CardProps, CardSize} from "./types";
import {BookmarkIcon, DislikeIcon, LikeIcon, MoreIcon, SaveBookmarkIcon} from "../../assets/icons";
import {
    LikeStatus,
    PostSelectors,
    setPostVisibility,
    setSavedPosts,
    setSelectedPost,
    setStatus
} from "../../redux/reducers/postSlice";
import {Theme, useThemeContext} from "../../context/Theme/Context";
import styles from "./Card.module.scss";


const Card: FC<CardProps> = ({ card, size }) => {
    const {title, text, date, image} = card;

    const { theme } = useThemeContext();

    const isMedium = size === CardSize.Medium;
    const isSmall = size === CardSize.Small;
    const isDark = theme === Theme.Dark;

    const isVisible = useSelector(PostSelectors.getVisibleSelectedModal);
    const dispatch = useDispatch();

    const onClickMore = () => {
        dispatch(setSelectedPost(card))
        dispatch(setPostVisibility(true))
    };

    const onStatusClick = (status: LikeStatus) => () => {
        dispatch(setStatus({status, card}))
    };

    const onSaveClick = () => {
        dispatch(setSavedPosts({card}))
    }

    const likedPosts = useSelector(PostSelectors.getLikedPosts);
    const dislikedPosts = useSelector(PostSelectors.getDislikedPosts);
    const savedPosts = useSelector(PostSelectors.getSavedPosts);

    const likedIndex = likedPosts.findIndex(post => post.id === card.id);
    const dislikedIndex = dislikedPosts.findIndex(post => post.id === card.id);
    const savedIndex = savedPosts.findIndex(post => post.id === card.id);

    return (
        <div
            className={classNames(styles.container, {
                [styles.mediumContainer]: isMedium,
                [styles.smallContainer]: isSmall,
                [styles.darkContainer]: isDark,
            })}
        >
            <div
                className={classNames(styles.infoContainer, {
                    [styles.mediumInfoContainer]: isMedium,
                    [styles.smallInfoContainer]: isSmall,
                })}
            >
                <div className={styles.mainInfoContainer}>
                    <div className={styles.titleContainer}>
                        <div className={styles.date}>{date}</div>
                        <div
                            className={classNames(styles.title, {
                                [styles.mediumTitle]: isMedium || isSmall,
                                [styles.darkTitle]: isDark,
                            })}
                        >
                            {title}
                        </div>
                    </div>
                    {size === CardSize.Large && <div className={styles.text}>{text}</div>}
                </div>
                <img
                    alt={"image"}
                    src={image}
                    className={classNames(styles.image, {
                        [styles.mediumImage]: isMedium,
                        [styles.smallImage]: isSmall,
                    })}
                />
            </div>
            <div className={styles.footer}>
                <div
                    className={classNames(styles.iconContainer, {
                        [styles.darkIconContainer]: isDark,
                    })}
                >
                    <div onClick={onStatusClick(LikeStatus.Like)} className={styles.likeDislikeIcon}>
                        <LikeIcon />
                        <div className={styles.likeNumber}>
                            {likedIndex > -1 && 1}
                        </div>
                    </div>
                    <div onClick={onStatusClick(LikeStatus.Dislike)} className={styles.likeDislikeIcon}>
                        <DislikeIcon />
                        <div className={styles.likeNumber}>
                            {dislikedIndex > -1 && 1}
                        </div>
                    </div>
                </div>
                <div
                    className={classNames(styles.iconContainer, {
                        [styles.darkIconContainer]: isDark,
                    })}
                >
                    <div onClick={ onSaveClick } className={styles.moreIcon}>
                        { savedIndex === -1 ? <BookmarkIcon /> : <SaveBookmarkIcon /> }
                    </div>
                    {!isVisible && (
                        <div onClick={ onClickMore } className={styles.moreIcon}>
                            <MoreIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;