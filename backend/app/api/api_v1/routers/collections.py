from fastapi import APIRouter, Request, Depends, Response, encoders, Query
import typing as t
import time
import datetime

from app.db.session import get_db
from app.db.crud import (
    get_collections,
    get_collection_prices,
    get_collection_detail,
)
from app.db.schemas import Collection, CollectionPrice
# from app.core.auth import get_current_active_user, get_current_active_superuser

collection_router = r = APIRouter()


@r.get(
    "/collections/{page}",
    response_model=t.List[Collection],
    response_model_exclude_none=True,
)
async def collection_list(
    page: int = Query(1, gt=0),
    db=Depends(get_db),
):
    """
    Get all collection
    """
    page_size = 20
    skip = (page-1) * page_size
    collections = get_collections(db, skip=skip, limit=page_size)
    return collections

@r.get(
    "/collection_detail/{collection_id}",
    response_model=Collection,
    response_model_exclude_none=True,
)
async def collection_detail(
        collection_id: int = Query(None, gt=0),
        db=Depends(get_db),
):
    return get_collection_detail(db, collection_id)

# response_model=t.List[CollectionPrice],
@r.get(
    "/collection_prices/{collection_id}",
    response_model_exclude_none=True,
)
async def collection_price_list(
    collection_id: int = Query(None),
    db=Depends(get_db)
):
    end_time = int(time.time() * 1000)
    start_time = end_time - (86400 * 7 * 1000)
    res_list = get_collection_prices(db, collection_id, start_time, end_time)
    labels = []
    data = []
    for res_item in res_list:
        labels.append(res_item.dt)
        data.append(res_item.price / 100.0)
    return {"labels":labels, "data": data}


# @r.get("/users/me", response_model=User, response_model_exclude_none=True)
# async def user_me(current_user=Depends(get_current_active_user)):
#     """
#     Get own user
#     """
#     return current_user


# @r.get(
#     "/users/{user_id}",
#     response_model=User,
#     response_model_exclude_none=True,
# )
# # async def user_details(
# #     request: Request,
# #     user_id: int,
# #     db=Depends(get_db),
# #     current_user=Depends(get_current_active_superuser),
# # ):
# async def user_details(
#         request: Request,
#         user_id: int,
#         db=Depends(get_db),
# ):
#     """
#     Get any user details
#     """
#     user = get_user(db, user_id)
#     return user
#     # return encoders.jsonable_encoder(
#     #     user, skip_defaults=True, exclude_none=True,
#     # )


# @r.post("/users", response_model=User, response_model_exclude_none=True)
# async def user_create(
#     request: Request,
#     user: UserCreate,
#     db=Depends(get_db),
#     current_user=Depends(get_current_active_superuser),
# ):
#     """
#     Create a new user
#     """
#     return create_user(db, user)


# @r.put(
#     "/users/{user_id}", response_model=User, response_model_exclude_none=True
# )
# async def user_edit(
#     request: Request,
#     user_id: int,
#     user: UserEdit,
#     db=Depends(get_db),
#     current_user=Depends(get_current_active_superuser),
# ):
#     """
#     Update existing user
#     """
#     return edit_user(db, user_id, user)


# @r.delete(
#     "/users/{user_id}", response_model=User, response_model_exclude_none=True
# )
# async def user_delete(
#     request: Request,
#     user_id: int,
#     db=Depends(get_db),
#     current_user=Depends(get_current_active_superuser),
# ):
#     """
#     Delete existing user
#     """
#     return delete_user(db, user_id)
